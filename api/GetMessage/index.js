module.exports = async function (context, req) {
  const date = "2022-07-13T22:10:05.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

