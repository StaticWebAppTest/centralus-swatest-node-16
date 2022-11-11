module.exports = async function (context, req) {
  const date = "2022-11-11T13:36:56.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

