module.exports = async function (context, req) {
  const date = "2025-12-21T14:12:47.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

