module.exports = async function (context, req) {
  const date = "2022-11-27T07:09:16.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

