module.exports = async function (context, req) {
  const date = "2022-11-22T10:11:38.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

