module.exports = async function (context, req) {
  const date = "2022-03-22T07:09:59.540Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

