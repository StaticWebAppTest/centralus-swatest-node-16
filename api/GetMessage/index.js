module.exports = async function (context, req) {
  const date = "2023-09-01T11:07:07.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

