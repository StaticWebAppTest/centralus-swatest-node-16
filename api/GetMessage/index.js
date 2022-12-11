module.exports = async function (context, req) {
  const date = "2022-12-11T15:09:02.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

