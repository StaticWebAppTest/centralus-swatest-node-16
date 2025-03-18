module.exports = async function (context, req) {
  const date = "2025-03-18T10:13:18.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

