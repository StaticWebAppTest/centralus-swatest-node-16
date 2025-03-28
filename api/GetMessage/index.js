module.exports = async function (context, req) {
  const date = "2025-03-28T10:13:20.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

