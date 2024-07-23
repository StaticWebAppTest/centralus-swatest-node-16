module.exports = async function (context, req) {
  const date = "2024-07-23T00:50:22.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

