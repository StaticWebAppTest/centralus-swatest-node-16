module.exports = async function (context, req) {
  const date = "2024-02-05T17:08:45.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

