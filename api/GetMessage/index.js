module.exports = async function (context, req) {
  const date = "2024-12-04T16:16:12.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

