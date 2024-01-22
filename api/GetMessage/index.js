module.exports = async function (context, req) {
  const date = "2024-01-22T06:13:33.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

