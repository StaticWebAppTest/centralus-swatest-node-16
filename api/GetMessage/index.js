module.exports = async function (context, req) {
  const date = "2023-01-12T12:19:57.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

