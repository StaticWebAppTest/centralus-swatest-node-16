module.exports = async function (context, req) {
  const date = "2024-03-24T03:09:23.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

