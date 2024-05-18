module.exports = async function (context, req) {
  const date = "2024-05-18T17:07:33.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

