module.exports = async function (context, req) {
  const date = "2022-05-17T09:11:16.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

