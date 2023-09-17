module.exports = async function (context, req) {
  const date = "2023-09-17T21:06:52.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

