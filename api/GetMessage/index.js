module.exports = async function (context, req) {
  const date = "2022-04-21T12:19:32.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

