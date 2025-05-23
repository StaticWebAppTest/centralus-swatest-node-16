module.exports = async function (context, req) {
  const date = "2025-05-23T22:12:47.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

