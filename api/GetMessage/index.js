module.exports = async function (context, req) {
  const date = "2023-03-29T11:08:00.143Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

