module.exports = async function (context, req) {
  const date = "2025-12-16T11:13:38.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

