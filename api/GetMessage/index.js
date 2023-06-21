module.exports = async function (context, req) {
  const date = "2023-06-21T20:09:03.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

