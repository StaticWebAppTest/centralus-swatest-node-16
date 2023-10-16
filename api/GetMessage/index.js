module.exports = async function (context, req) {
  const date = "2023-10-16T14:09:03.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

