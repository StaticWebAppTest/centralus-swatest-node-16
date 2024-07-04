module.exports = async function (context, req) {
  const date = "2024-07-04T02:32:04.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

