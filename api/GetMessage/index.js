module.exports = async function (context, req) {
  const date = "2023-09-04T08:11:58.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

