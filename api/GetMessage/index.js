module.exports = async function (context, req) {
  const date = "2022-03-30T04:12:35.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

