module.exports = async function (context, req) {
  const date = "2022-09-29T13:45:27.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

