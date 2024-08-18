module.exports = async function (context, req) {
  const date = "2024-08-18T08:12:44.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

