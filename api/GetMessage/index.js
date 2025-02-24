module.exports = async function (context, req) {
  const date = "2025-02-24T22:11:21.374Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

