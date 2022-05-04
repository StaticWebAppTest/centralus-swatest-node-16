module.exports = async function (context, req) {
  const date = "2022-05-04T15:13:40.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

