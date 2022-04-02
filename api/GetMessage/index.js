module.exports = async function (context, req) {
  const date = "2022-04-02T23:09:50.851Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

