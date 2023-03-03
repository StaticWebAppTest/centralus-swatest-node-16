module.exports = async function (context, req) {
  const date = "2023-03-03T04:25:45.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

