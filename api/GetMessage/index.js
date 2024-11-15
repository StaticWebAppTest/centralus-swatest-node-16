module.exports = async function (context, req) {
  const date = "2024-11-15T10:13:10.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

