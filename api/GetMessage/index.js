module.exports = async function (context, req) {
  const date = "2023-11-13T23:09:03.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

