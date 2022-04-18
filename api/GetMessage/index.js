module.exports = async function (context, req) {
  const date = "2022-04-18T03:38:54.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

