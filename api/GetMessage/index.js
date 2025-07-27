module.exports = async function (context, req) {
  const date = "2025-07-27T23:14:02.827Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

