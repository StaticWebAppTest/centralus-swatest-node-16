module.exports = async function (context, req) {
  const date = "2024-10-03T17:10:43.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

