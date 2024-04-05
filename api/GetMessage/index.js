module.exports = async function (context, req) {
  const date = "2024-04-05T06:12:00.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

