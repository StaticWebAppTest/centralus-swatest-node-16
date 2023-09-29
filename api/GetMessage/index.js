module.exports = async function (context, req) {
  const date = "2023-09-29T09:08:42.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

