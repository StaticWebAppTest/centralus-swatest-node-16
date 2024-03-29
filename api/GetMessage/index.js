module.exports = async function (context, req) {
  const date = "2024-03-29T18:11:21.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

