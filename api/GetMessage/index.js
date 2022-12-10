module.exports = async function (context, req) {
  const date = "2022-12-10T05:08:38.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

