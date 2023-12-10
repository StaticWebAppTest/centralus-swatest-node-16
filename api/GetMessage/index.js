module.exports = async function (context, req) {
  const date = "2023-12-10T13:09:33.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

