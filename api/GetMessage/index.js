module.exports = async function (context, req) {
  const date = "2024-05-25T10:10:08.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

