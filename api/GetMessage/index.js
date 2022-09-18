module.exports = async function (context, req) {
  const date = "2022-09-18T19:09:32.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

