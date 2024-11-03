module.exports = async function (context, req) {
  const date = "2024-11-03T11:09:51.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

