module.exports = async function (context, req) {
  const date = "2023-08-02T20:09:03.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

