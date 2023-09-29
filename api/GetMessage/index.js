module.exports = async function (context, req) {
  const date = "2023-09-29T17:07:55.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

