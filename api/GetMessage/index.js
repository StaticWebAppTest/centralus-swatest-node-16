module.exports = async function (context, req) {
  const date = "2023-06-01T09:09:11.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

