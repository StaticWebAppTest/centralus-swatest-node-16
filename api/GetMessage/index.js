module.exports = async function (context, req) {
  const date = "2024-05-08T23:10:45.085Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

