module.exports = async function (context, req) {
  const date = "2023-08-12T10:07:28.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

