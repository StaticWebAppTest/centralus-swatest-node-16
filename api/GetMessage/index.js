module.exports = async function (context, req) {
  const date = "2024-06-09T16:11:13.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

