module.exports = async function (context, req) {
  const date = "2024-10-28T20:12:56.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

