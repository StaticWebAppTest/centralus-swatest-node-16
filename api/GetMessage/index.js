module.exports = async function (context, req) {
  const date = "2022-03-16T10:10:54.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

