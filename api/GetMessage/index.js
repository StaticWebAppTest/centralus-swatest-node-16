module.exports = async function (context, req) {
  const date = "2023-04-02T09:07:43.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

