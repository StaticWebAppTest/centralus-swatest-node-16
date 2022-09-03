module.exports = async function (context, req) {
  const date = "2022-09-03T04:59:05.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

