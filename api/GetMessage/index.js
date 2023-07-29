module.exports = async function (context, req) {
  const date = "2023-07-29T15:07:39.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

