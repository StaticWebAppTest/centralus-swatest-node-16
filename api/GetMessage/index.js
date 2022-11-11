module.exports = async function (context, req) {
  const date = "2022-11-11T15:12:48.402Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

