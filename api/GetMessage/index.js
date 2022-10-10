module.exports = async function (context, req) {
  const date = "2022-10-10T10:13:51.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

