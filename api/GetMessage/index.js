module.exports = async function (context, req) {
  const date = "2025-04-18T10:13:30.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

