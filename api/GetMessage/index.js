module.exports = async function (context, req) {
  const date = "2022-03-09T15:10:18.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

