module.exports = async function (context, req) {
  const date = "2024-10-05T17:10:31.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

