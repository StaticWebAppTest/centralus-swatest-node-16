module.exports = async function (context, req) {
  const date = "2023-02-10T12:18:08.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

