module.exports = async function (context, req) {
  const date = "2023-10-14T05:07:46.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

