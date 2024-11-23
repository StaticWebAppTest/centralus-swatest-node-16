module.exports = async function (context, req) {
  const date = "2024-11-23T08:14:34.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

