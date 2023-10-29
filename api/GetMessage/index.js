module.exports = async function (context, req) {
  const date = "2023-10-29T03:09:07.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

