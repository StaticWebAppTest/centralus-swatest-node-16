module.exports = async function (context, req) {
  const date = "2022-07-04T14:09:26.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

