module.exports = async function (context, req) {
  const date = "2022-06-07T11:09:38.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

