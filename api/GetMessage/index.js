module.exports = async function (context, req) {
  const date = "2023-06-21T05:09:11.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

