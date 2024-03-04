module.exports = async function (context, req) {
  const date = "2024-03-04T20:09:31.159Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

