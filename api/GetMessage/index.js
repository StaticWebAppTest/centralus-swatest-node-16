module.exports = async function (context, req) {
  const date = "2023-06-21T16:11:01.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

