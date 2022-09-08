module.exports = async function (context, req) {
  const date = "2022-09-08T18:13:54.642Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

