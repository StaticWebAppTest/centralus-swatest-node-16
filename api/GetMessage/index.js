module.exports = async function (context, req) {
  const date = "2024-03-28T10:09:39.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

