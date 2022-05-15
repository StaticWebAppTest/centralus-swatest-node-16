module.exports = async function (context, req) {
  const date = "2022-05-15T04:18:01.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

