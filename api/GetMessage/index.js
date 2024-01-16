module.exports = async function (context, req) {
  const date = "2024-01-16T08:12:29.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

