module.exports = async function (context, req) {
  const date = "2025-04-13T13:21:04.691Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

