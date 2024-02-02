module.exports = async function (context, req) {
  const date = "2024-02-02T19:09:05.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

