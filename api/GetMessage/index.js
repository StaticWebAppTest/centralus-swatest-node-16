module.exports = async function (context, req) {
  const date = "2022-06-09T13:32:30.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

