module.exports = async function (context, req) {
  const date = "2025-10-24T23:12:05.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

