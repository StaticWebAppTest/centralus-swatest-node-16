module.exports = async function (context, req) {
  const date = "2022-05-09T13:32:31.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

