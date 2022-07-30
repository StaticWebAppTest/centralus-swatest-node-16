module.exports = async function (context, req) {
  const date = "2022-07-30T23:09:59.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

