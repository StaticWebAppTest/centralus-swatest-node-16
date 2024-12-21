module.exports = async function (context, req) {
  const date = "2024-12-21T08:13:39.344Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

