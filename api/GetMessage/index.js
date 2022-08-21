module.exports = async function (context, req) {
  const date = "2022-08-21T06:13:43.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

