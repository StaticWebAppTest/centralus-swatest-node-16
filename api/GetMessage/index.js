module.exports = async function (context, req) {
  const date = "2024-03-11T20:11:00.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

