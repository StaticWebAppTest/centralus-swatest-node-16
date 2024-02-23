module.exports = async function (context, req) {
  const date = "2024-02-23T13:09:54.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

