module.exports = async function (context, req) {
  const date = "2023-01-07T14:07:44.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

