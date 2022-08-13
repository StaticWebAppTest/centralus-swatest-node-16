module.exports = async function (context, req) {
  const date = "2022-08-13T13:21:43.118Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

