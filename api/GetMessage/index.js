module.exports = async function (context, req) {
  const date = "2024-03-01T07:09:00.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

