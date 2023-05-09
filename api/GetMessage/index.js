module.exports = async function (context, req) {
  const date = "2023-05-09T21:07:38.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

