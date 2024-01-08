module.exports = async function (context, req) {
  const date = "2024-01-08T07:09:13.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

