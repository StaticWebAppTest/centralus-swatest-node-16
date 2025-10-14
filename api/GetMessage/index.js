module.exports = async function (context, req) {
  const date = "2025-10-14T13:25:26.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

