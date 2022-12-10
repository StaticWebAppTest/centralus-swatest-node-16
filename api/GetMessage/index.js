module.exports = async function (context, req) {
  const date = "2022-12-10T10:09:22.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

