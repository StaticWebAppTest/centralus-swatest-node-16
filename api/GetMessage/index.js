module.exports = async function (context, req) {
  const date = "2022-08-31T21:11:03.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

