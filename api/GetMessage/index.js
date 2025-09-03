module.exports = async function (context, req) {
  const date = "2025-09-03T07:12:25.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

