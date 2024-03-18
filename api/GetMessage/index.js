module.exports = async function (context, req) {
  const date = "2024-03-18T23:09:32.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

