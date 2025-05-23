module.exports = async function (context, req) {
  const date = "2025-05-23T10:14:13.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

