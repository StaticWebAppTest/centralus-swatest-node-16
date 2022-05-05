module.exports = async function (context, req) {
  const date = "2022-05-05T17:18:55.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

