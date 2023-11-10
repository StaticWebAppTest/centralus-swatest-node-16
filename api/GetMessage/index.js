module.exports = async function (context, req) {
  const date = "2023-11-10T16:11:08.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

