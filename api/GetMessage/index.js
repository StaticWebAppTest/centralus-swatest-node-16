module.exports = async function (context, req) {
  const date = "2024-11-06T15:12:06.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

