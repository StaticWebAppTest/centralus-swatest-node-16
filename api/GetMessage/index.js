module.exports = async function (context, req) {
  const date = "2023-05-05T08:10:54.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

