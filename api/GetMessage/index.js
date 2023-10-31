module.exports = async function (context, req) {
  const date = "2023-10-31T19:07:42.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

