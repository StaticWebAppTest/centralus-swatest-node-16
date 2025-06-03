module.exports = async function (context, req) {
  const date = "2025-06-03T22:13:07.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

