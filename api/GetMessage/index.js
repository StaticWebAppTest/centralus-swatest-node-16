module.exports = async function (context, req) {
  const date = "2024-12-03T09:13:27.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

