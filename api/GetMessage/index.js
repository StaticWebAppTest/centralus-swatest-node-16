module.exports = async function (context, req) {
  const date = "2024-09-23T16:13:37.158Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

