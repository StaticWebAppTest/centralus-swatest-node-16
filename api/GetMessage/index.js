module.exports = async function (context, req) {
  const date = "2023-03-29T15:21:00.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

