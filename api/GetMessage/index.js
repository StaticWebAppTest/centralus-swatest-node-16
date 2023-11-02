module.exports = async function (context, req) {
  const date = "2023-11-02T14:08:23.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

