module.exports = async function (context, req) {
  const date = "2025-04-23T14:13:21.864Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

