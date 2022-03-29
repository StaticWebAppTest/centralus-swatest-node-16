module.exports = async function (context, req) {
  const date = "2022-03-29T23:10:48.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

