module.exports = async function (context, req) {
  const date = "2023-08-13T09:07:22.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

