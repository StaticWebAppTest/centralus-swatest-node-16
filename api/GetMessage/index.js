module.exports = async function (context, req) {
  const date = "2023-04-25T14:08:19.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

