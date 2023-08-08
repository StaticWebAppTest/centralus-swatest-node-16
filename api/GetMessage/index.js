module.exports = async function (context, req) {
  const date = "2023-08-08T19:07:20.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

