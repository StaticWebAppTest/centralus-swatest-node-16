module.exports = async function (context, req) {
  const date = "2022-09-17T20:12:27.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

