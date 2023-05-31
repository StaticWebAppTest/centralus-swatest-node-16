module.exports = async function (context, req) {
  const date = "2023-05-31T12:17:31.174Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

