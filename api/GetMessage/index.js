module.exports = async function (context, req) {
  const date = "2022-05-22T15:12:02.118Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

