module.exports = async function (context, req) {
  const date = "2023-11-21T03:10:04.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

