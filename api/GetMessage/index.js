module.exports = async function (context, req) {
  const date = "2023-03-29T14:09:04.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

