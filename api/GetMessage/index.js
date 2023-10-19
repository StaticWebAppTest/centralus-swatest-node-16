module.exports = async function (context, req) {
  const date = "2023-10-19T16:11:25.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

