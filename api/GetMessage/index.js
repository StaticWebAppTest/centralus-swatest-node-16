module.exports = async function (context, req) {
  const date = "2023-11-20T11:08:15.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

