module.exports = async function (context, req) {
  const date = "2024-09-21T09:10:38.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

