module.exports = async function (context, req) {
  const date = "2023-08-27T22:07:11.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

