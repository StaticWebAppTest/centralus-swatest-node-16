module.exports = async function (context, req) {
  const date = "2023-11-26T01:54:15.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

