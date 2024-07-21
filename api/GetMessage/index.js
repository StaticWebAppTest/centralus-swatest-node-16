module.exports = async function (context, req) {
  const date = "2024-07-21T21:08:49.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

