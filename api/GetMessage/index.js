module.exports = async function (context, req) {
  const date = "2022-04-22T15:10:57.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

