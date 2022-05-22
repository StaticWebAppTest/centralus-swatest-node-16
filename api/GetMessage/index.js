module.exports = async function (context, req) {
  const date = "2022-05-22T09:10:32.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

