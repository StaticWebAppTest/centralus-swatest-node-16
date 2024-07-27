module.exports = async function (context, req) {
  const date = "2024-07-27T06:13:00.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

