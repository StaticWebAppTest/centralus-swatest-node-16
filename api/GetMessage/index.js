module.exports = async function (context, req) {
  const date = "2025-08-23T06:18:04.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

