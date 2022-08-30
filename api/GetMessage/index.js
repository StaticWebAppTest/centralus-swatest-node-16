module.exports = async function (context, req) {
  const date = "2022-08-30T06:07:14.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

