module.exports = async function (context, req) {
  const date = "2023-04-15T03:09:06.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

