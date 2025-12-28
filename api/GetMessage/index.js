module.exports = async function (context, req) {
  const date = "2025-12-28T14:13:30.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

