module.exports = async function (context, req) {
  const date = "2023-01-11T11:08:19.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

