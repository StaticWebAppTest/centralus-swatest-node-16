module.exports = async function (context, req) {
  const date = "2024-08-21T03:11:58.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

