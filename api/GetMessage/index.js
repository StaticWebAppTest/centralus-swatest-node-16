module.exports = async function (context, req) {
  const date = "2025-03-21T17:11:01.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

