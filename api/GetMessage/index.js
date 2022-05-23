module.exports = async function (context, req) {
  const date = "2022-05-23T05:17:42.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

