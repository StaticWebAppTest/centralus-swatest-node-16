module.exports = async function (context, req) {
  const date = "2024-12-11T12:25:00.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

