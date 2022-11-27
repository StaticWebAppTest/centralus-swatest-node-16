module.exports = async function (context, req) {
  const date = "2022-11-27T18:11:48.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

