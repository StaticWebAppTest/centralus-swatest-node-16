module.exports = async function (context, req) {
  const date = "2024-08-22T16:13:16.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

