module.exports = async function (context, req) {
  const date = "2022-07-11T13:34:43.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

