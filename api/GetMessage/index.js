module.exports = async function (context, req) {
  const date = "2022-10-13T22:15:21.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

