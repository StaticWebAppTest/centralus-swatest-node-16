module.exports = async function (context, req) {
  const date = "2023-06-04T16:10:42.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

