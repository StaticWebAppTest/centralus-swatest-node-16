module.exports = async function (context, req) {
  const date = "2022-11-03T20:10:11.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

