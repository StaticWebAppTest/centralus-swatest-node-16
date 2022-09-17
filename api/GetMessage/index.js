module.exports = async function (context, req) {
  const date = "2022-09-17T14:10:32.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

