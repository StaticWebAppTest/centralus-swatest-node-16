module.exports = async function (context, req) {
  const date = "2022-03-12T15:09:46.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

