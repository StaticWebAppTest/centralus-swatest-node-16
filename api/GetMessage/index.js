module.exports = async function (context, req) {
  const date = "2022-09-13T20:13:13.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

