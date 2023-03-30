module.exports = async function (context, req) {
  const date = "2023-03-30T09:10:46.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

