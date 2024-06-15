module.exports = async function (context, req) {
  const date = "2024-06-15T04:12:59.369Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

