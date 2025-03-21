module.exports = async function (context, req) {
  const date = "2025-03-21T10:13:09.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

