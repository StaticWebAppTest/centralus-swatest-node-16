module.exports = async function (context, req) {
  const date = "2022-10-24T14:35:35.560Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

