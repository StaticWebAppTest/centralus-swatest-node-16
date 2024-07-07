module.exports = async function (context, req) {
  const date = "2024-07-07T08:12:13.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

