module.exports = async function (context, req) {
  const date = "2025-10-27T15:14:30.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

