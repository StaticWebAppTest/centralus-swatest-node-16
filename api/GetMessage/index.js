module.exports = async function (context, req) {
  const date = "2023-11-13T22:08:12.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

