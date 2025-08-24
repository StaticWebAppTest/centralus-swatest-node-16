module.exports = async function (context, req) {
  const date = "2025-08-24T11:10:12.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

