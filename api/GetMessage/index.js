module.exports = async function (context, req) {
  const date = "2023-11-14T04:10:53.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

