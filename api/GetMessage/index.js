module.exports = async function (context, req) {
  const date = "2022-07-31T14:09:44.560Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

