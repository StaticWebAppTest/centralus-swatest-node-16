module.exports = async function (context, req) {
  const date = "2022-12-24T23:08:33.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

