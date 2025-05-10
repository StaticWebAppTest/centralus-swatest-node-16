module.exports = async function (context, req) {
  const date = "2025-05-10T17:10:14.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

