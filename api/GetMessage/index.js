module.exports = async function (context, req) {
  const date = "2022-07-24T17:13:50.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

