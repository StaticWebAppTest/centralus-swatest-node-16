module.exports = async function (context, req) {
  const date = "2023-11-02T11:07:32.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

