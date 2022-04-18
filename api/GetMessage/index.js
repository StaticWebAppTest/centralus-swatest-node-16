module.exports = async function (context, req) {
  const date = "2022-04-18T12:19:05.010Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

