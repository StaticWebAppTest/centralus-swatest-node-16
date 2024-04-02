module.exports = async function (context, req) {
  const date = "2024-04-02T09:09:54.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

