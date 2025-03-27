module.exports = async function (context, req) {
  const date = "2025-03-27T15:13:39.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

