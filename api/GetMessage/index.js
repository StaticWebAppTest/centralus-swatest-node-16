module.exports = async function (context, req) {
  const date = "2024-07-11T14:09:34.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

