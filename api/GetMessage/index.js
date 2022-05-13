module.exports = async function (context, req) {
  const date = "2022-05-13T01:03:31.490Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

