module.exports = async function (context, req) {
  const date = "2023-10-04T18:11:58.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

