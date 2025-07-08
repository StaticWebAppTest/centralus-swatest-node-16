module.exports = async function (context, req) {
  const date = "2025-07-08T10:15:16.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

