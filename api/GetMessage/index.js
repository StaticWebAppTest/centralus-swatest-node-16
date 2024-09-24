module.exports = async function (context, req) {
  const date = "2024-09-24T21:10:04.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

