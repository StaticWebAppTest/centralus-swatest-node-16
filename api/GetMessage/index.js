module.exports = async function (context, req) {
  const date = "2025-01-21T14:11:01.831Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

