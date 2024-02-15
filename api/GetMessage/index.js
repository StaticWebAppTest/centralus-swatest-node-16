module.exports = async function (context, req) {
  const date = "2024-02-15T05:09:37.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

