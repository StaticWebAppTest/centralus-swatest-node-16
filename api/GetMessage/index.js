module.exports = async function (context, req) {
  const date = "2023-02-26T13:16:11.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

