module.exports = async function (context, req) {
  const date = "2022-11-23T22:09:49.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

