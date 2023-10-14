module.exports = async function (context, req) {
  const date = "2023-10-14T15:07:58.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

