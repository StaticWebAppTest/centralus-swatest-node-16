module.exports = async function (context, req) {
  const date = "2022-09-25T13:29:44.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

