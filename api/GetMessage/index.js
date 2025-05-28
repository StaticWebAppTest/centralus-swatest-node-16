module.exports = async function (context, req) {
  const date = "2025-05-28T15:13:21.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

