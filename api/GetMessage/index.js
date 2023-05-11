module.exports = async function (context, req) {
  const date = "2023-05-11T04:10:34.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

