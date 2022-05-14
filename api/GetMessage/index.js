module.exports = async function (context, req) {
  const date = "2022-05-14T13:31:04.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

