module.exports = async function (context, req) {
  const date = "2024-11-21T22:11:20.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

