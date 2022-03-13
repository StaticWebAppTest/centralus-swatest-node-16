module.exports = async function (context, req) {
  const date = "2022-03-13T21:08:38.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

