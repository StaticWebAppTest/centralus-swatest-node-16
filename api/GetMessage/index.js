module.exports = async function (context, req) {
  const date = "2023-05-23T09:08:57.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

