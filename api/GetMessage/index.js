module.exports = async function (context, req) {
  const date = "2023-10-01T21:07:07.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

