module.exports = async function (context, req) {
  const date = "2022-05-16T15:12:58.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

