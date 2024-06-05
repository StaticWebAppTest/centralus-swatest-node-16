module.exports = async function (context, req) {
  const date = "2024-06-05T06:13:56.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

