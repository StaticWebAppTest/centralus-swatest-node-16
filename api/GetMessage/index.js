module.exports = async function (context, req) {
  const date = "2024-09-09T05:12:10.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

