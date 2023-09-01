module.exports = async function (context, req) {
  const date = "2023-09-01T22:07:42.086Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

