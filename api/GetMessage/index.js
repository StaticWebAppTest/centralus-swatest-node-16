module.exports = async function (context, req) {
  const date = "2025-06-13T01:08:31.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

