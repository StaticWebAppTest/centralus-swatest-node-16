module.exports = async function (context, req) {
  const date = "2023-10-24T03:10:04.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

