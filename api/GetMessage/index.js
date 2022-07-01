module.exports = async function (context, req) {
  const date = "2022-07-01T18:13:46.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

