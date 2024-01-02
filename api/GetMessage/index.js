module.exports = async function (context, req) {
  const date = "2024-01-02T20:09:30.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

