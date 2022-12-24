module.exports = async function (context, req) {
  const date = "2022-12-24T22:08:05.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

