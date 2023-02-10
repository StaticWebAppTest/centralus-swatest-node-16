module.exports = async function (context, req) {
  const date = "2023-02-10T16:13:27.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

