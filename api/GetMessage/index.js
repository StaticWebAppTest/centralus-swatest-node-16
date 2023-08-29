module.exports = async function (context, req) {
  const date = "2023-08-29T09:08:53.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

