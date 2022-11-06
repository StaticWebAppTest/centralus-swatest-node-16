module.exports = async function (context, req) {
  const date = "2022-11-06T21:10:22.576Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

