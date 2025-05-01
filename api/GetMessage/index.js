module.exports = async function (context, req) {
  const date = "2025-05-01T15:12:52.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

