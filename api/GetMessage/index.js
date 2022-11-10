module.exports = async function (context, req) {
  const date = "2022-11-10T06:15:00.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

