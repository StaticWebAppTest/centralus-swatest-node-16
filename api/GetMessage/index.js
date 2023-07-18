module.exports = async function (context, req) {
  const date = "2023-07-18T21:07:43.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

