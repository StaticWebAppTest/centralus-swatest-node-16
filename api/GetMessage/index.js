module.exports = async function (context, req) {
  const date = "2022-09-18T16:15:41.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

