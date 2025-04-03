module.exports = async function (context, req) {
  const date = "2025-04-03T17:11:30.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

