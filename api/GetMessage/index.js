module.exports = async function (context, req) {
  const date = "2023-05-08T07:08:53.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

