module.exports = async function (context, req) {
  const date = "2025-04-21T21:12:08.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

