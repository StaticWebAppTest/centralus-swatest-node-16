module.exports = async function (context, req) {
  const date = "2023-01-25T07:12:00.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

