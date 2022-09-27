module.exports = async function (context, req) {
  const date = "2022-09-27T11:11:20.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

