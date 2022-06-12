module.exports = async function (context, req) {
  const date = "2022-06-12T06:13:32.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

