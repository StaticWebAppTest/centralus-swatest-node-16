module.exports = async function (context, req) {
  const date = "2025-04-08T14:13:35.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

