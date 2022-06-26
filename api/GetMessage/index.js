module.exports = async function (context, req) {
  const date = "2022-06-26T13:19:20.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

