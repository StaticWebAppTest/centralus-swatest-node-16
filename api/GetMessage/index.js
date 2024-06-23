module.exports = async function (context, req) {
  const date = "2024-06-23T00:51:15.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

