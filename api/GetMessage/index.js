module.exports = async function (context, req) {
  const date = "2024-01-28T02:17:06.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

