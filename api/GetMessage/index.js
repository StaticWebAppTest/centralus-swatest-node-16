module.exports = async function (context, req) {
  const date = "2022-10-31T04:43:34.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

