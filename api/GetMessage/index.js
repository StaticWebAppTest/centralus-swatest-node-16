module.exports = async function (context, req) {
  const date = "2024-11-12T11:09:42.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

