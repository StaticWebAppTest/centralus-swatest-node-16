module.exports = async function (context, req) {
  const date = "2023-04-10T13:11:19.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

