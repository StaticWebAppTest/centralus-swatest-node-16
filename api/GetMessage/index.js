module.exports = async function (context, req) {
  const date = "2023-03-22T22:07:19.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

