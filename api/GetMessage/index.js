module.exports = async function (context, req) {
  const date = "2022-03-07T21:09:36.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

