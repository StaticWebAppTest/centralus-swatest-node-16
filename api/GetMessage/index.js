module.exports = async function (context, req) {
  const date = "2023-05-29T14:08:07.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

