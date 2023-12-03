module.exports = async function (context, req) {
  const date = "2023-12-03T16:10:31.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

