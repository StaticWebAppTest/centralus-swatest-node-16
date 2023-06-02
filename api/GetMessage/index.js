module.exports = async function (context, req) {
  const date = "2023-06-02T11:06:54.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

