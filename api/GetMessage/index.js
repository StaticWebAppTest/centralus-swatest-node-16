module.exports = async function (context, req) {
  const date = "2022-04-24T02:25:47.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

