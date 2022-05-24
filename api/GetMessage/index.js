module.exports = async function (context, req) {
  const date = "2022-05-24T07:10:49.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

