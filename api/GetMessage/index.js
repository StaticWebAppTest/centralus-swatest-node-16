module.exports = async function (context, req) {
  const date = "2022-08-21T12:18:07.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

