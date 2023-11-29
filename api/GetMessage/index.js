module.exports = async function (context, req) {
  const date = "2023-11-29T15:09:43.143Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

