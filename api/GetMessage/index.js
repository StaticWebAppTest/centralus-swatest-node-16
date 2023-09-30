module.exports = async function (context, req) {
  const date = "2023-09-30T21:06:57.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

