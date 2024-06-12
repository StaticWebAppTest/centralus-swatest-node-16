module.exports = async function (context, req) {
  const date = "2024-06-12T11:08:32.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

