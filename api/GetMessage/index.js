module.exports = async function (context, req) {
  const date = "2024-08-15T21:10:45.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

