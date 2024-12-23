module.exports = async function (context, req) {
  const date = "2024-12-23T12:22:48.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

