module.exports = async function (context, req) {
  const date = "2022-06-13T20:11:31.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

