module.exports = async function (context, req) {
  const date = "2024-11-05T14:12:31.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

