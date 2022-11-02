module.exports = async function (context, req) {
  const date = "2022-11-02T22:11:36.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

