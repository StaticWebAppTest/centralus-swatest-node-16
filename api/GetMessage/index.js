module.exports = async function (context, req) {
  const date = "2023-08-10T09:09:18.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

