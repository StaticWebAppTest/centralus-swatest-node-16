module.exports = async function (context, req) {
  const date = "2023-10-24T22:08:08.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

