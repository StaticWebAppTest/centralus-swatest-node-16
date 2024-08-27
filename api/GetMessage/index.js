module.exports = async function (context, req) {
  const date = "2024-08-27T21:09:42.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

