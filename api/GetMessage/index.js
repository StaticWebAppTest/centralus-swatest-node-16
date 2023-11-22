module.exports = async function (context, req) {
  const date = "2023-11-22T02:25:33.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

