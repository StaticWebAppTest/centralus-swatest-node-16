module.exports = async function (context, req) {
  const date = "2022-05-05T08:14:43.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

