module.exports = async function (context, req) {
  const date = "2023-02-08T19:08:07.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

