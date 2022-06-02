module.exports = async function (context, req) {
  const date = "2022-06-02T22:09:43.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

