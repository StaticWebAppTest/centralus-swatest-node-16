module.exports = async function (context, req) {
  const date = "2023-06-17T13:09:26.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

