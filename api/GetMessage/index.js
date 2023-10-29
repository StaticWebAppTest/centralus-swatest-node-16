module.exports = async function (context, req) {
  const date = "2023-10-29T09:07:56.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

