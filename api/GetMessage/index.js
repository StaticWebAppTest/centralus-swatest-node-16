module.exports = async function (context, req) {
  const date = "2023-06-25T08:11:50.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

