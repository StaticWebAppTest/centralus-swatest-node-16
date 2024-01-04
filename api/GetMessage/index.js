module.exports = async function (context, req) {
  const date = "2024-01-04T20:09:52.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

