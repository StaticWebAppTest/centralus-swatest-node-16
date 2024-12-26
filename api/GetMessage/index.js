module.exports = async function (context, req) {
  const date = "2024-12-26T16:13:51.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

