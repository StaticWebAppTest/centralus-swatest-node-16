module.exports = async function (context, req) {
  const date = "2022-09-27T15:15:12.835Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

