module.exports = async function (context, req) {
  const date = "2023-05-20T09:07:54.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

