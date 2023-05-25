module.exports = async function (context, req) {
  const date = "2023-05-25T14:08:25.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

