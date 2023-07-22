module.exports = async function (context, req) {
  const date = "2023-07-22T23:07:53.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

