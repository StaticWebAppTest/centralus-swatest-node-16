module.exports = async function (context, req) {
  const date = "2024-11-18T10:13:47.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

