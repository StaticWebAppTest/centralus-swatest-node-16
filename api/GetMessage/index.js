module.exports = async function (context, req) {
  const date = "2024-03-11T02:16:41.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

