module.exports = async function (context, req) {
  const date = "2023-10-14T16:09:57.305Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

