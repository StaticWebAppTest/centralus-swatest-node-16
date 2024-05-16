module.exports = async function (context, req) {
  const date = "2024-05-16T17:09:52.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

