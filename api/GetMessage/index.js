module.exports = async function (context, req) {
  const date = "2023-06-09T02:26:00.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

