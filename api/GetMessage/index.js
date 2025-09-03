module.exports = async function (context, req) {
  const date = "2025-09-03T14:13:14.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

