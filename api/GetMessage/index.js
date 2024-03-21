module.exports = async function (context, req) {
  const date = "2024-03-21T03:11:12.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

