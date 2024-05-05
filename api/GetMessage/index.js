module.exports = async function (context, req) {
  const date = "2024-05-05T08:10:55.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

