module.exports = async function (context, req) {
  const date = "2023-06-09T17:08:09.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

