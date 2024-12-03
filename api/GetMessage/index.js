module.exports = async function (context, req) {
  const date = "2024-12-03T19:10:19.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

