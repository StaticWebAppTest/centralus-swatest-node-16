module.exports = async function (context, req) {
  const date = "2025-05-30T16:16:42.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

