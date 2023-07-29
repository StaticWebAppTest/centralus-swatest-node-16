module.exports = async function (context, req) {
  const date = "2023-07-29T10:07:47.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

