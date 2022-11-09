module.exports = async function (context, req) {
  const date = "2022-11-09T04:37:40.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

