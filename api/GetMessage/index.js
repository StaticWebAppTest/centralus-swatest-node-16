module.exports = async function (context, req) {
  const date = "2023-04-25T17:08:07.150Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

