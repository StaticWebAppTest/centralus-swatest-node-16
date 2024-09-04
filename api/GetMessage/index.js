module.exports = async function (context, req) {
  const date = "2024-09-04T08:13:39.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

