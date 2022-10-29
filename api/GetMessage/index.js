module.exports = async function (context, req) {
  const date = "2022-10-29T14:11:45.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

