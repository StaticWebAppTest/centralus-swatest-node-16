module.exports = async function (context, req) {
  const date = "2024-03-29T14:08:19.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

