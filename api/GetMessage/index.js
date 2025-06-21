module.exports = async function (context, req) {
  const date = "2025-06-21T12:24:21.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

