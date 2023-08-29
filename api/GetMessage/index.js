module.exports = async function (context, req) {
  const date = "2023-08-29T18:11:00.734Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

