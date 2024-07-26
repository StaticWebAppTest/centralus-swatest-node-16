module.exports = async function (context, req) {
  const date = "2024-07-26T20:13:09.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

