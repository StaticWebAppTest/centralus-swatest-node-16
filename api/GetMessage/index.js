module.exports = async function (context, req) {
  const date = "2024-03-25T22:09:10.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

