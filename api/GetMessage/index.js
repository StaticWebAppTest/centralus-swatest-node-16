module.exports = async function (context, req) {
  const date = "2023-08-25T13:10:33.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

