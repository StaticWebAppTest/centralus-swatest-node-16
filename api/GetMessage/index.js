module.exports = async function (context, req) {
  const date = "2022-05-09T04:23:43.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

