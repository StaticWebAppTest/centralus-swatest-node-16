module.exports = async function (context, req) {
  const date = "2024-01-12T07:08:46.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

