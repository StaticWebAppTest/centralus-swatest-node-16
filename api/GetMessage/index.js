module.exports = async function (context, req) {
  const date = "2024-05-09T16:11:45.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

