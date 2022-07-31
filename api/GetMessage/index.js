module.exports = async function (context, req) {
  const date = "2022-07-31T22:09:51.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

