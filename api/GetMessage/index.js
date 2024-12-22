module.exports = async function (context, req) {
  const date = "2024-12-22T17:09:51.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

