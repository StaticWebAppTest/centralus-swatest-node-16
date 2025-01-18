module.exports = async function (context, req) {
  const date = "2025-01-18T20:11:09.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

