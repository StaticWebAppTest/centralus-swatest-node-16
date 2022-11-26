module.exports = async function (context, req) {
  const date = "2022-11-26T00:50:10.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

