module.exports = async function (context, req) {
  const date = "2023-10-29T23:08:07.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

