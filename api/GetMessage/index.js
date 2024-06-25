module.exports = async function (context, req) {
  const date = "2024-06-25T19:09:13.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

