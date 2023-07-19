module.exports = async function (context, req) {
  const date = "2023-07-19T16:11:25.864Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

