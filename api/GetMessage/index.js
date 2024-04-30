module.exports = async function (context, req) {
  const date = "2024-04-30T16:12:29.511Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

