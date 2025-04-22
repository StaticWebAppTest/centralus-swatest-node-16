module.exports = async function (context, req) {
  const date = "2025-04-22T13:23:55.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

