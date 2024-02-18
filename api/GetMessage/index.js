module.exports = async function (context, req) {
  const date = "2024-02-18T20:09:31.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

