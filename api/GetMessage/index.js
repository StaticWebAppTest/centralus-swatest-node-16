module.exports = async function (context, req) {
  const date = "2024-12-23T16:13:55.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

