module.exports = async function (context, req) {
  const date = "2022-07-29T14:09:45.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

