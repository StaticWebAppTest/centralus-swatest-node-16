module.exports = async function (context, req) {
  const date = "2023-05-25T16:11:16.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

