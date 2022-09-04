module.exports = async function (context, req) {
  const date = "2022-09-04T13:25:36.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

