module.exports = async function (context, req) {
  const date = "2023-09-14T14:08:11.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

