module.exports = async function (context, req) {
  const date = "2025-01-04T12:20:37.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

