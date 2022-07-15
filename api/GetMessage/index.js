module.exports = async function (context, req) {
  const date = "2022-07-15T04:57:38.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

