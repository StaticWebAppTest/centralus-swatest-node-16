module.exports = async function (context, req) {
  const date = "2023-01-17T10:10:19.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

