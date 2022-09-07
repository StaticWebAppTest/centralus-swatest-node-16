module.exports = async function (context, req) {
  const date = "2022-09-07T16:15:18.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

