module.exports = async function (context, req) {
  const date = "2022-08-16T19:08:32.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

