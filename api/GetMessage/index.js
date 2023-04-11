module.exports = async function (context, req) {
  const date = "2023-04-11T22:08:08.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

