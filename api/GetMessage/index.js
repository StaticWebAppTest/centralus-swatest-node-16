module.exports = async function (context, req) {
  const date = "2023-11-29T07:08:44.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

