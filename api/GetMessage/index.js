module.exports = async function (context, req) {
  const date = "2022-06-08T02:56:07.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

