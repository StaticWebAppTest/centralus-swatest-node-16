module.exports = async function (context, req) {
  const date = "2022-11-27T05:09:17.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

