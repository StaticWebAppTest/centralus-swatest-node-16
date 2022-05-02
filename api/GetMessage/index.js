module.exports = async function (context, req) {
  const date = "2022-05-02T06:14:17.548Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

