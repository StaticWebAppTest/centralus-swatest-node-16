module.exports = async function (context, req) {
  const date = "2024-09-01T17:09:02.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

