module.exports = async function (context, req) {
  const date = "2022-10-01T11:10:22.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

