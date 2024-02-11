module.exports = async function (context, req) {
  const date = "2024-02-11T15:08:42.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

