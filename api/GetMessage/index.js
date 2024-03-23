module.exports = async function (context, req) {
  const date = "2024-03-23T00:40:22.943Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

