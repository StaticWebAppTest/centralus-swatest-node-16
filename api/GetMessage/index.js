module.exports = async function (context, req) {
  const date = "2022-05-02T11:09:48.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

