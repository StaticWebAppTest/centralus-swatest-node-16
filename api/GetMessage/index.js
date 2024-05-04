module.exports = async function (context, req) {
  const date = "2024-05-04T21:09:08.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

