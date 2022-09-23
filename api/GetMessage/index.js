module.exports = async function (context, req) {
  const date = "2022-09-23T01:13:30.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

