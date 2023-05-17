module.exports = async function (context, req) {
  const date = "2023-05-17T10:09:24.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

