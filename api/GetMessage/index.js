module.exports = async function (context, req) {
  const date = "2022-04-09T08:12:09.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

