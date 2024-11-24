module.exports = async function (context, req) {
  const date = "2024-11-24T02:56:54.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

