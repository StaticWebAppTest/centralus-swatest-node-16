module.exports = async function (context, req) {
  const date = "2022-04-07T12:18:55.010Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

