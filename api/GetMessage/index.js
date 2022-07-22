module.exports = async function (context, req) {
  const date = "2022-07-22T04:38:04.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

