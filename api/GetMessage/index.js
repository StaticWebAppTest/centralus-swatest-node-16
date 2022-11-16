module.exports = async function (context, req) {
  const date = "2022-11-16T20:11:42.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

