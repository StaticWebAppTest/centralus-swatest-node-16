module.exports = async function (context, req) {
  const date = "2022-11-13T23:11:19.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

