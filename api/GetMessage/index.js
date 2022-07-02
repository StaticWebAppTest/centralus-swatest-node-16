module.exports = async function (context, req) {
  const date = "2022-07-02T22:10:07.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

