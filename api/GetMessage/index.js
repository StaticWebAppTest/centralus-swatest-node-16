module.exports = async function (context, req) {
  const date = "2022-12-21T06:12:21.548Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

