module.exports = async function (context, req) {
  const date = "2023-07-06T09:10:34.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

