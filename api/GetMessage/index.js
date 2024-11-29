module.exports = async function (context, req) {
  const date = "2024-11-29T14:11:44.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

