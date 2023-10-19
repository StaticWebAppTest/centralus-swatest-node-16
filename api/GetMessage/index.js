module.exports = async function (context, req) {
  const date = "2023-10-19T07:08:13.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

