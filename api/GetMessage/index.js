module.exports = async function (context, req) {
  const date = "2022-11-21T12:21:30.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

