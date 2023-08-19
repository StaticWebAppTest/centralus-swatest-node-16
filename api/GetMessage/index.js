module.exports = async function (context, req) {
  const date = "2023-08-19T16:09:11.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

