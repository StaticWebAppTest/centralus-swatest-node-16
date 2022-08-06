module.exports = async function (context, req) {
  const date = "2022-08-06T04:16:57.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

