module.exports = async function (context, req) {
  const date = "2022-06-28T12:22:14.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

