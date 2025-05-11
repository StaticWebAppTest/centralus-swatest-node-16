module.exports = async function (context, req) {
  const date = "2025-05-11T16:14:12.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

