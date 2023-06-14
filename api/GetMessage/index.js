module.exports = async function (context, req) {
  const date = "2023-06-14T03:09:35.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

