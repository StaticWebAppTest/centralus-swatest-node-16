module.exports = async function (context, req) {
  const date = "2024-09-20T04:13:46.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

