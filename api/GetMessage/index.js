module.exports = async function (context, req) {
  const date = "2024-08-03T00:49:03.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

