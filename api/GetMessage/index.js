module.exports = async function (context, req) {
  const date = "2022-06-05T21:09:35.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

