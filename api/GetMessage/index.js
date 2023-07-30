module.exports = async function (context, req) {
  const date = "2023-07-30T09:07:49.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

