module.exports = async function (context, req) {
  const date = "2024-04-21T14:08:24.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

