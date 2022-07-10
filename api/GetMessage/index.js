module.exports = async function (context, req) {
  const date = "2022-07-10T20:10:43.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

