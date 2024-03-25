module.exports = async function (context, req) {
  const date = "2024-03-25T12:16:05.943Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

