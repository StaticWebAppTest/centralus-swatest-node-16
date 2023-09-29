module.exports = async function (context, req) {
  const date = "2023-09-29T22:08:09.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

