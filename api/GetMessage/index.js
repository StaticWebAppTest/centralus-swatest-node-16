module.exports = async function (context, req) {
  const date = "2022-11-26T04:12:07.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

