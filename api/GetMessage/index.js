module.exports = async function (context, req) {
  const date = "2022-04-03T22:10:05.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

