module.exports = async function (context, req) {
  const date = "2023-02-17T13:18:08.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

