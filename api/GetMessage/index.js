module.exports = async function (context, req) {
  const date = "2022-07-31T05:13:32.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

