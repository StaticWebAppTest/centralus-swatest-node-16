module.exports = async function (context, req) {
  const date = "2022-12-25T23:09:18.490Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

