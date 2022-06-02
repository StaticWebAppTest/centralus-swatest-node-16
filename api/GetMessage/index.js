module.exports = async function (context, req) {
  const date = "2022-06-02T09:11:25.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

