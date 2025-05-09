module.exports = async function (context, req) {
  const date = "2025-05-09T11:10:48.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

