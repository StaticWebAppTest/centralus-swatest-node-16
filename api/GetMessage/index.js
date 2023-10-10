module.exports = async function (context, req) {
  const date = "2023-10-10T21:07:53.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

