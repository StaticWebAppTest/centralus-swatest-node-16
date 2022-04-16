module.exports = async function (context, req) {
  const date = "2022-04-16T18:12:22.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

