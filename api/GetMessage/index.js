module.exports = async function (context, req) {
  const date = "2022-05-24T21:10:26.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

