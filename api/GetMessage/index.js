module.exports = async function (context, req) {
  const date = "2024-05-17T06:13:31.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

