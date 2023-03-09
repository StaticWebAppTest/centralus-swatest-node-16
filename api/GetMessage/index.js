module.exports = async function (context, req) {
  const date = "2023-03-09T05:09:53.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

