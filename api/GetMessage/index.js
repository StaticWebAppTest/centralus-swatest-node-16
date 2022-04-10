module.exports = async function (context, req) {
  const date = "2022-04-10T05:09:26.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

