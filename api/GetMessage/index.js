module.exports = async function (context, req) {
  const date = "2022-07-15T19:08:27.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

