module.exports = async function (context, req) {
  const date = "2023-06-04T22:07:31.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

