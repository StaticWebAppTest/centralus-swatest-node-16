module.exports = async function (context, req) {
  const date = "2022-07-11T22:10:05.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

