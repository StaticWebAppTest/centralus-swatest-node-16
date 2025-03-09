module.exports = async function (context, req) {
  const date = "2025-03-09T10:11:01.359Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

