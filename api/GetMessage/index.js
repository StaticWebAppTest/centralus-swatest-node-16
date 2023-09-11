module.exports = async function (context, req) {
  const date = "2023-09-11T16:11:24.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

