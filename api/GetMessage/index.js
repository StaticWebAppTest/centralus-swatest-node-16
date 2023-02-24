module.exports = async function (context, req) {
  const date = "2023-02-24T08:13:22.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

