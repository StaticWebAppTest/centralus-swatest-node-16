module.exports = async function (context, req) {
  const date = "2023-10-12T19:07:02.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

