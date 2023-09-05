module.exports = async function (context, req) {
  const date = "2023-09-05T03:09:37.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

