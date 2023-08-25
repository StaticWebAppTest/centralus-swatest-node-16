module.exports = async function (context, req) {
  const date = "2023-08-25T22:07:53.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

