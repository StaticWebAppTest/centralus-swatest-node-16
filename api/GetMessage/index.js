module.exports = async function (context, req) {
  const date = "2023-04-10T14:08:19.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

