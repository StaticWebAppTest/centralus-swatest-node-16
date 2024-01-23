module.exports = async function (context, req) {
  const date = "2024-01-23T11:08:02.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

