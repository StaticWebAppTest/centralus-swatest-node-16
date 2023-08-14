module.exports = async function (context, req) {
  const date = "2023-08-14T23:08:02.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

