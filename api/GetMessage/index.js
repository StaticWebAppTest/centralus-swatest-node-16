module.exports = async function (context, req) {
  const date = "2023-12-20T18:11:28.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

