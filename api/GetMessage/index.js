module.exports = async function (context, req) {
  const date = "2024-08-28T20:12:01.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

