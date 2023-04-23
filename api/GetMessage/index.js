module.exports = async function (context, req) {
  const date = "2023-04-23T03:09:24.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

