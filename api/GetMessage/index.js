module.exports = async function (context, req) {
  const date = "2024-03-25T06:12:44.490Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

