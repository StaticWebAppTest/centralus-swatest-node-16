module.exports = async function (context, req) {
  const date = "2022-10-01T21:11:06.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

