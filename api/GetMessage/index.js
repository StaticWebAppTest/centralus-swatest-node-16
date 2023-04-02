module.exports = async function (context, req) {
  const date = "2023-04-02T23:08:07.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

