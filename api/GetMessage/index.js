module.exports = async function (context, req) {
  const date = "2022-03-12T01:57:15.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

