module.exports = async function (context, req) {
  const date = "2023-08-12T12:14:11.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

