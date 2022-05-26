module.exports = async function (context, req) {
  const date = "2022-05-26T00:59:09.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

