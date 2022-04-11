module.exports = async function (context, req) {
  const date = "2022-04-11T18:13:32.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

