module.exports = async function (context, req) {
  const date = "2022-10-03T05:37:33.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

