module.exports = async function (context, req) {
  const date = "2024-12-21T05:10:46.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

