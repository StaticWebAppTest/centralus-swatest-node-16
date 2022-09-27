module.exports = async function (context, req) {
  const date = "2022-09-27T16:21:00.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

