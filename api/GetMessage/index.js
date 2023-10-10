module.exports = async function (context, req) {
  const date = "2023-10-10T09:09:16.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

