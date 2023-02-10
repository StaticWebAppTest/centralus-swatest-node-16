module.exports = async function (context, req) {
  const date = "2023-02-10T11:08:39.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

