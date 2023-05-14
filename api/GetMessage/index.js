module.exports = async function (context, req) {
  const date = "2023-05-14T15:07:59.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

