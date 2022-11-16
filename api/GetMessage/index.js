module.exports = async function (context, req) {
  const date = "2022-11-16T00:59:30.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

