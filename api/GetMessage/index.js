module.exports = async function (context, req) {
  const date = "2024-08-21T12:19:27.943Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

