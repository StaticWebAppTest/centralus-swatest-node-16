module.exports = async function (context, req) {
  const date = "2025-05-15T09:14:14.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

