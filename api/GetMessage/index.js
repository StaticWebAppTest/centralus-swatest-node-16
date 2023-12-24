module.exports = async function (context, req) {
  const date = "2023-12-24T01:53:13.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

