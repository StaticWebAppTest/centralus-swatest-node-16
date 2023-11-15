module.exports = async function (context, req) {
  const date = "2023-11-15T02:22:19.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

