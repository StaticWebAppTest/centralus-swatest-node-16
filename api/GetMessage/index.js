module.exports = async function (context, req) {
  const date = "2024-12-31T20:12:20.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

