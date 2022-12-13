module.exports = async function (context, req) {
  const date = "2022-12-13T20:10:42.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

