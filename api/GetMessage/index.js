module.exports = async function (context, req) {
  const date = "2024-06-20T07:09:53.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

