module.exports = async function (context, req) {
  const date = "2024-06-06T04:12:07.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

