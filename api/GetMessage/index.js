module.exports = async function (context, req) {
  const date = "2023-06-30T12:18:43.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

