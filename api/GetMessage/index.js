module.exports = async function (context, req) {
  const date = "2022-11-11T20:12:18.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

