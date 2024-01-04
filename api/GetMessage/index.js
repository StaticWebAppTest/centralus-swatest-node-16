module.exports = async function (context, req) {
  const date = "2024-01-04T00:43:30.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

