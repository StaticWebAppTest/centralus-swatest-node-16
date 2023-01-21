module.exports = async function (context, req) {
  const date = "2023-01-21T04:11:18.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

