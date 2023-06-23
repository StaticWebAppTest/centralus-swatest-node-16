module.exports = async function (context, req) {
  const date = "2023-06-23T21:08:39.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

