module.exports = async function (context, req) {
  const date = "2025-01-04T18:14:39.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

