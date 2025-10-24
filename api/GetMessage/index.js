module.exports = async function (context, req) {
  const date = "2025-10-24T10:15:01.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

