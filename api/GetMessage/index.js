module.exports = async function (context, req) {
  const date = "2022-06-27T12:23:20.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

