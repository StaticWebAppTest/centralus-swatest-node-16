module.exports = async function (context, req) {
  const date = "2024-07-09T16:13:17.629Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

