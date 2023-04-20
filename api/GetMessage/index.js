module.exports = async function (context, req) {
  const date = "2023-04-20T18:11:00.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

