module.exports = async function (context, req) {
  const date = "2022-11-20T08:13:14.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

