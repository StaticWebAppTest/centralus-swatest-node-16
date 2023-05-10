module.exports = async function (context, req) {
  const date = "2023-05-10T00:46:59.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

