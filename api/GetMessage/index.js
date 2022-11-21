module.exports = async function (context, req) {
  const date = "2022-11-21T08:14:51.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

