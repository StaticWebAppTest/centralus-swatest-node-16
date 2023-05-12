module.exports = async function (context, req) {
  const date = "2023-05-12T08:11:05.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

