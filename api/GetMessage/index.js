module.exports = async function (context, req) {
  const date = "2022-05-24T10:12:32.970Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

