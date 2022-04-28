module.exports = async function (context, req) {
  const date = "2022-04-28T12:21:40.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

