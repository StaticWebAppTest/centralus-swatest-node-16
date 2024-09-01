module.exports = async function (context, req) {
  const date = "2024-09-01T07:09:47.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

