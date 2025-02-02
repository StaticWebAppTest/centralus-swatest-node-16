module.exports = async function (context, req) {
  const date = "2025-02-02T04:13:06.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

