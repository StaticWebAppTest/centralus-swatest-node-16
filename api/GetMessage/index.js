module.exports = async function (context, req) {
  const date = "2022-10-05T20:14:07.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

