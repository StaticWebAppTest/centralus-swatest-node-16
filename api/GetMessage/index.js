module.exports = async function (context, req) {
  const date = "2023-10-24T10:09:37.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

