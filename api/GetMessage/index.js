module.exports = async function (context, req) {
  const date = "2022-12-22T23:10:21.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

