module.exports = async function (context, req) {
  const date = "2022-05-12T11:09:56.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

