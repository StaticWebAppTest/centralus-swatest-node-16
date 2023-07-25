module.exports = async function (context, req) {
  const date = "2023-07-25T21:07:33.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

