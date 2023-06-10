module.exports = async function (context, req) {
  const date = "2023-06-10T14:07:06.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

