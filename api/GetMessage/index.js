module.exports = async function (context, req) {
  const date = "2023-12-30T14:07:48.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

