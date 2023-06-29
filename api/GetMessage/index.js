module.exports = async function (context, req) {
  const date = "2023-06-29T07:09:39.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

