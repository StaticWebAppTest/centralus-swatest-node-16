module.exports = async function (context, req) {
  const date = "2024-02-27T03:10:35.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

