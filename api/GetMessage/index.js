module.exports = async function (context, req) {
  const date = "2025-05-18T13:21:00.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

