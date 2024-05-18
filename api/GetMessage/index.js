module.exports = async function (context, req) {
  const date = "2024-05-18T05:09:50.586Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

