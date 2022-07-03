module.exports = async function (context, req) {
  const date = "2022-07-03T22:09:24.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

