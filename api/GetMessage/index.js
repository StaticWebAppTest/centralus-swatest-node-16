module.exports = async function (context, req) {
  const date = "2024-03-12T15:08:59.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

