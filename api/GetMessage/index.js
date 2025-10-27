module.exports = async function (context, req) {
  const date = "2025-10-27T14:13:52.629Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

