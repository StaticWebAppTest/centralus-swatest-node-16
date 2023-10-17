module.exports = async function (context, req) {
  const date = "2023-10-17T11:07:36.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

