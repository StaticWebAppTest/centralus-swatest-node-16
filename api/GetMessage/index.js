module.exports = async function (context, req) {
  const date = "2023-06-08T16:11:25.167Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

