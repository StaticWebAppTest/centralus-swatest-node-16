module.exports = async function (context, req) {
  const date = "2024-03-12T12:15:57.943Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

