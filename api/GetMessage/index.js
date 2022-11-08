module.exports = async function (context, req) {
  const date = "2022-11-08T06:14:52.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

