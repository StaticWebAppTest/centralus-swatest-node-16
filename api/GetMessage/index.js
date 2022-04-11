module.exports = async function (context, req) {
  const date = "2022-04-11T06:13:49.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

