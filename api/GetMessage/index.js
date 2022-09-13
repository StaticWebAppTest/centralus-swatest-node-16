module.exports = async function (context, req) {
  const date = "2022-09-13T01:08:29.576Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

