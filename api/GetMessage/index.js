module.exports = async function (context, req) {
  const date = "2024-05-29T09:11:52.402Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

