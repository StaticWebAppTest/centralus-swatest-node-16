module.exports = async function (context, req) {
  const date = "2024-12-19T06:17:52.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

