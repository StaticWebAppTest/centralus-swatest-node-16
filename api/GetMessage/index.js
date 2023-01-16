module.exports = async function (context, req) {
  const date = "2023-01-16T17:09:00.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

