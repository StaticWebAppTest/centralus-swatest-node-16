module.exports = async function (context, req) {
  const date = "2023-10-29T12:14:54.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

