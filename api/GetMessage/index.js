module.exports = async function (context, req) {
  const date = "2024-04-20T09:08:19.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

