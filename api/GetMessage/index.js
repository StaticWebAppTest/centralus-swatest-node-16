module.exports = async function (context, req) {
  const date = "2024-05-20T11:09:07.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

