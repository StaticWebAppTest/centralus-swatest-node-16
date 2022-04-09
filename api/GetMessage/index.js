module.exports = async function (context, req) {
  const date = "2022-04-09T06:12:39.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

