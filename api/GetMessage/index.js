module.exports = async function (context, req) {
  const date = "2024-05-22T16:12:59.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

