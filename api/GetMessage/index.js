module.exports = async function (context, req) {
  const date = "2024-10-27T12:20:23.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

