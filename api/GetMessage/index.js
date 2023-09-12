module.exports = async function (context, req) {
  const date = "2023-09-12T22:07:51.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

