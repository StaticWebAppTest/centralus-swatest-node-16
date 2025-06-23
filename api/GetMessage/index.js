module.exports = async function (context, req) {
  const date = "2025-06-23T11:12:41.320Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

