module.exports = async function (context, req) {
  const date = "2022-11-01T04:05:52.167Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

