module.exports = async function (context, req) {
  const date = "2025-05-29T11:11:40.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

