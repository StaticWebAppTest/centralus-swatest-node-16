module.exports = async function (context, req) {
  const date = "2022-11-24T22:09:25.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

