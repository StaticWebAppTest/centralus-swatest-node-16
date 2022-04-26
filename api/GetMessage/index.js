module.exports = async function (context, req) {
  const date = "2022-04-26T18:13:27.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

