module.exports = async function (context, req) {
  const date = "2022-05-22T20:11:32.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

