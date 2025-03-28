module.exports = async function (context, req) {
  const date = "2025-03-28T14:12:19.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

