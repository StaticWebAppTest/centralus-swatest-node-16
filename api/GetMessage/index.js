module.exports = async function (context, req) {
  const date = "2023-10-02T13:12:07.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

