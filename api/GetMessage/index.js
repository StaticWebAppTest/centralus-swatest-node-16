module.exports = async function (context, req) {
  const date = "2022-09-03T23:10:41.691Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

