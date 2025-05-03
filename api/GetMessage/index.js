module.exports = async function (context, req) {
  const date = "2025-05-03T06:17:00.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

