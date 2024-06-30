module.exports = async function (context, req) {
  const date = "2024-06-30T13:10:29.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

