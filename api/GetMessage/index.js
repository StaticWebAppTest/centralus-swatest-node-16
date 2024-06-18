module.exports = async function (context, req) {
  const date = "2024-06-18T17:09:48.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

