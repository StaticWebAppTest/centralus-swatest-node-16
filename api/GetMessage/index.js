module.exports = async function (context, req) {
  const date = "2024-02-13T21:07:50.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

