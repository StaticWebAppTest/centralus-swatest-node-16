module.exports = async function (context, req) {
  const date = "2024-06-16T18:13:10.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

