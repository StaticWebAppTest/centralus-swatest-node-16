module.exports = async function (context, req) {
  const date = "2023-08-22T11:06:57.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

