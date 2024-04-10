module.exports = async function (context, req) {
  const date = "2024-04-10T18:13:08.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

