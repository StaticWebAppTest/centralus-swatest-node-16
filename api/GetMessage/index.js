module.exports = async function (context, req) {
  const date = "2023-04-06T01:59:22.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

