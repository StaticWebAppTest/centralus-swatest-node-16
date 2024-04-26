module.exports = async function (context, req) {
  const date = "2024-04-26T15:10:12.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

