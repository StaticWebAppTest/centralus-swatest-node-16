module.exports = async function (context, req) {
  const date = "2022-05-11T23:11:01.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

