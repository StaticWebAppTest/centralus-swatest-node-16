module.exports = async function (context, req) {
  const date = "2022-04-06T21:09:52.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

