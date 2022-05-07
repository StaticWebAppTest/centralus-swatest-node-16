module.exports = async function (context, req) {
  const date = "2022-05-07T11:08:54.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

