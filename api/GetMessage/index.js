module.exports = async function (context, req) {
  const date = "2024-05-13T13:11:30.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

