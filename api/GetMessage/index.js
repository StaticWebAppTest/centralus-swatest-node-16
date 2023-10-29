module.exports = async function (context, req) {
  const date = "2023-10-29T21:07:07.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

