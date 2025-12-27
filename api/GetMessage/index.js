module.exports = async function (context, req) {
  const date = "2025-12-27T14:13:05.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

