module.exports = async function (context, req) {
  const date = "2022-03-31T02:27:15.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

