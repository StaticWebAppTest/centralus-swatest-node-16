module.exports = async function (context, req) {
  const date = "2022-07-01T04:49:26.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

