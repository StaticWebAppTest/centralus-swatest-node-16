module.exports = async function (context, req) {
  const date = "2022-07-07T15:20:30.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

