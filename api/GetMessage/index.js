module.exports = async function (context, req) {
  const date = "2025-04-12T10:11:54.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

