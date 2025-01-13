module.exports = async function (context, req) {
  const date = "2025-01-13T09:13:24.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

