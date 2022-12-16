module.exports = async function (context, req) {
  const date = "2022-12-16T07:08:28.490Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

