module.exports = async function (context, req) {
  const date = "2023-09-17T09:07:53.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

