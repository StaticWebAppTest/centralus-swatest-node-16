module.exports = async function (context, req) {
  const date = "2024-06-28T15:10:22.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

