module.exports = async function (context, req) {
  const date = "2022-04-02T09:09:39.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

