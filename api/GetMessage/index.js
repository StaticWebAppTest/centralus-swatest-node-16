module.exports = async function (context, req) {
  const date = "2023-03-25T11:06:46.864Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

