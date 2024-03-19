module.exports = async function (context, req) {
  const date = "2024-03-19T09:09:09.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

