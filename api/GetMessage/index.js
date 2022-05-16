module.exports = async function (context, req) {
  const date = "2022-05-16T11:09:49.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

