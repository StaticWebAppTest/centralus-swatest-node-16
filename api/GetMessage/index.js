module.exports = async function (context, req) {
  const date = "2023-05-06T11:07:07.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

