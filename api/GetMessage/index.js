module.exports = async function (context, req) {
  const date = "2022-11-11T22:11:02.864Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

