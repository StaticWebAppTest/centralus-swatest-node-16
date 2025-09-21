module.exports = async function (context, req) {
  const date = "2025-09-21T15:11:00.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

