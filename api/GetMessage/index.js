module.exports = async function (context, req) {
  const date = "2024-10-04T18:15:20.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

