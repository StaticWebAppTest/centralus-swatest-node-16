module.exports = async function (context, req) {
  const date = "2023-06-29T14:08:27.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

