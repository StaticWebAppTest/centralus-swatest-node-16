module.exports = async function (context, req) {
  const date = "2022-07-26T06:15:05.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

