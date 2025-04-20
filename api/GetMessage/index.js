module.exports = async function (context, req) {
  const date = "2025-04-20T11:10:15.320Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

