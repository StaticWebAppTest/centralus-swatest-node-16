module.exports = async function (context, req) {
  const date = "2024-10-10T13:20:31.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

