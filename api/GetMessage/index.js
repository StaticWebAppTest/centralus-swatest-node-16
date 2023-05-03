module.exports = async function (context, req) {
  const date = "2023-05-03T01:59:27.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

