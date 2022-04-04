module.exports = async function (context, req) {
  const date = "2022-04-04T20:11:07.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

