module.exports = async function (context, req) {
  const date = "2024-12-20T15:11:47.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

