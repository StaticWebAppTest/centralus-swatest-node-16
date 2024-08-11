module.exports = async function (context, req) {
  const date = "2024-08-11T07:09:13.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

