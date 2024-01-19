module.exports = async function (context, req) {
  const date = "2024-01-19T19:07:26.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

