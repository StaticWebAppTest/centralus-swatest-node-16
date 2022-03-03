module.exports = async function (context, req) {
  const date = "2022-03-03T08:11:55.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

