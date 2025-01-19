module.exports = async function (context, req) {
  const date = "2025-01-19T13:12:54.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

