module.exports = async function (context, req) {
  const date = "2024-11-19T13:22:32.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

