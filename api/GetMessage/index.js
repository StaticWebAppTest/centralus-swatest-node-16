module.exports = async function (context, req) {
  const date = "2022-03-17T09:09:55.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

