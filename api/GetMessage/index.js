module.exports = async function (context, req) {
  const date = "2024-11-16T23:12:15.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

