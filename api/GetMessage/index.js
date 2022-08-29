module.exports = async function (context, req) {
  const date = "2022-08-29T23:11:49.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

