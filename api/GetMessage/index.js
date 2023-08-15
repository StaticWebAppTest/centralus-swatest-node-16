module.exports = async function (context, req) {
  const date = "2023-08-15T14:07:44.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

