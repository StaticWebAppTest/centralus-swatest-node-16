module.exports = async function (context, req) {
  const date = "2023-06-28T07:09:20.864Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

