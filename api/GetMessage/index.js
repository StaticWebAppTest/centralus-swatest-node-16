module.exports = async function (context, req) {
  const date = "2022-05-18T00:45:11.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

