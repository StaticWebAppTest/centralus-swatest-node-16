module.exports = async function (context, req) {
  const date = "2022-11-03T14:14:39.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

