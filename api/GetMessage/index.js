module.exports = async function (context, req) {
  const date = "2022-12-05T06:12:48.398Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

