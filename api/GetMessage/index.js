module.exports = async function (context, req) {
  const date = "2024-02-23T00:40:27.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

