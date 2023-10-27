module.exports = async function (context, req) {
  const date = "2023-10-27T07:08:04.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

