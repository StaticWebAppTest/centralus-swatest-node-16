module.exports = async function (context, req) {
  const date = "2023-01-29T11:07:34.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

