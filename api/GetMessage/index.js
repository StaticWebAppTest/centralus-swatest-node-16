module.exports = async function (context, req) {
  const date = "2023-06-06T21:09:02.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

