module.exports = async function (context, req) {
  const date = "2022-06-12T11:08:25.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

