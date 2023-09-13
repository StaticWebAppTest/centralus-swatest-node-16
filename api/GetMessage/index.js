module.exports = async function (context, req) {
  const date = "2023-09-13T13:12:13.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

