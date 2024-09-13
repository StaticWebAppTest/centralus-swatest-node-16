module.exports = async function (context, req) {
  const date = "2024-09-13T09:11:52.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

