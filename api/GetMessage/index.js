module.exports = async function (context, req) {
  const date = "2023-02-10T09:10:23.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

