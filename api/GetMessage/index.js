module.exports = async function (context, req) {
  const date = "2022-08-25T16:14:38.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

