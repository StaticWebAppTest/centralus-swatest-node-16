module.exports = async function (context, req) {
  const date = "2024-08-12T20:11:29.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

