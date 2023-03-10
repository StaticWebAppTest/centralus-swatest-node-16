module.exports = async function (context, req) {
  const date = "2023-03-10T08:13:22.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

