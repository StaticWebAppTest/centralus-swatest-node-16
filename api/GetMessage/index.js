module.exports = async function (context, req) {
  const date = "2023-09-19T17:07:43.964Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

