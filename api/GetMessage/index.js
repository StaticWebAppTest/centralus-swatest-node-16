module.exports = async function (context, req) {
  const date = "2023-09-18T11:07:31.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

