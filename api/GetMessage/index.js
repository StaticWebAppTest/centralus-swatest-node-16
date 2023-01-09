module.exports = async function (context, req) {
  const date = "2023-01-09T07:09:27.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

