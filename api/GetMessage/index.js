module.exports = async function (context, req) {
  const date = "2023-06-20T05:09:07.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

