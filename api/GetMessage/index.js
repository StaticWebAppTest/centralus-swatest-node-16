module.exports = async function (context, req) {
  const date = "2024-08-12T14:12:45.938Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

