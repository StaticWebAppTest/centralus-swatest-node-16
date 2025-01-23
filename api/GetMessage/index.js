module.exports = async function (context, req) {
  const date = "2025-01-23T07:11:12.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

