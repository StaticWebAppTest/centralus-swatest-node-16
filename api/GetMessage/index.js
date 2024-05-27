module.exports = async function (context, req) {
  const date = "2024-05-27T11:09:33.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

