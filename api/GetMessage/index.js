module.exports = async function (context, req) {
  const date = "2022-09-11T12:20:44.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

