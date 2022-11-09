module.exports = async function (context, req) {
  const date = "2022-11-09T05:23:47.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

