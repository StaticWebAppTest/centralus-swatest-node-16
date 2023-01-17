module.exports = async function (context, req) {
  const date = "2023-01-17T12:19:24.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

