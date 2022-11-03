module.exports = async function (context, req) {
  const date = "2022-11-03T18:17:22.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

