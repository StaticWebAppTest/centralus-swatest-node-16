module.exports = async function (context, req) {
  const date = "2022-09-11T20:12:48.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

