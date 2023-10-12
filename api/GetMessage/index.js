module.exports = async function (context, req) {
  const date = "2023-10-12T14:08:36.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

