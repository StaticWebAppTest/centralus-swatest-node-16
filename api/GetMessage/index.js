module.exports = async function (context, req) {
  const date = "2022-06-01T06:19:19.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

