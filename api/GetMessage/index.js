module.exports = async function (context, req) {
  const date = "2023-09-23T06:10:36.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

