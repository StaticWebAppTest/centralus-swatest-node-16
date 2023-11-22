module.exports = async function (context, req) {
  const date = "2023-11-22T03:10:05.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

