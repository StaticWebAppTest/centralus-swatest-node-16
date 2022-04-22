module.exports = async function (context, req) {
  const date = "2022-04-22T23:10:47.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

