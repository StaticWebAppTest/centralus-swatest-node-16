module.exports = async function (context, req) {
  const date = "2024-09-28T06:14:41.835Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

