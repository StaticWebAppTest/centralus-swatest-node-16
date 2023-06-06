module.exports = async function (context, req) {
  const date = "2023-06-06T14:08:09.864Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

