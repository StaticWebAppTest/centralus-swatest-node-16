module.exports = async function (context, req) {
  const date = "2022-06-22T23:10:13.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

